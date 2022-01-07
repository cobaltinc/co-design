import { useQueue } from '@co-design/hooks';
import { ToastProps } from './ToastContainer';

function randomId() {
  return `co-${Math.random().toString(36).substr(2, 9)}`;
}

export default function useToastsState({ limit }: { limit: number }) {
  const { state, queue, update, cleanQueue } = useQueue<ToastProps>(limit);

  const showToast = (toast: ToastProps) => {
    const id = toast.id || randomId();

    update((toasts) => {
      if (toast.id && toasts.some((n) => n.id === toast.id)) {
        return toasts;
      }

      return [...toasts, { ...toast, id }];
    });

    return id;
  };

  const updateToast = (id: string, toast: ToastProps) =>
    update((toasts) => {
      const index = toasts.findIndex((n) => n.id === id);

      if (index === -1) {
        return toasts;
      }

      const newToasts = [...toasts];
      newToasts[index] = toast;

      return newToasts;
    });

  const hideToast = (id: string) =>
    update((toasts) =>
      toasts.filter((toast) => {
        if (toast.id === id) {
          typeof toast.onClose === 'function' && toast.onClose(toast);
          return false;
        }

        return true;
      }),
    );

  const clean = () => update(() => []);

  return {
    toasts: state,
    queue,
    showToast,
    updateToast,
    hideToast,
    cleanQueue,
    clean,
  };
}
