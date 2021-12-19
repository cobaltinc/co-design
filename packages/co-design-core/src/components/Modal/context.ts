import { createContext } from 'react';
import { ModalProps } from './Modal';
import type { ConfirmModalProps } from './ConfirmModal';

export type ModalSettings = Partial<Omit<ModalProps, 'opened'>>;

export type ConfirmLabels = Record<'confirm' | 'cancel', string>;

export interface OpenConfirmModal extends ModalSettings, ConfirmModalProps {}

export type ModalState =
  | { id: string; props: ModalSettings; type: 'content' }
  | { id: string; props: OpenConfirmModal; type: 'confirm' }
  | { id: string; props: OpenConfirmModal; type: 'context'; ctx: string };

export interface ModalsContextProps {
  modals: ModalState[];
  openModal: (props: ModalSettings) => string;
  openConfirmModal: (props: OpenConfirmModal) => string;
  openContextModal: (modal: string, props: ModalSettings) => string;
  closeModal: (id: string) => void;
  closeAll: () => void;
}

export const ModalsContext = createContext<ModalsContextProps>({
  modals: [],
  openModal: () => null,
  openConfirmModal: () => null,
  openContextModal: () => null,
  closeAll: () => {},
  closeModal: () => {},
});
