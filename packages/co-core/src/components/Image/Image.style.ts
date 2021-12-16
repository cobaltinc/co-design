import { CoRadius, createStyles } from '@co/styles';

interface ImageStyles {
  radius?: CoRadius | number;
}

export default createStyles((theme, { radius }: ImageStyles) => {
  return {
    root: {
      position: 'relative',
      display: 'inline-block',
    },

    image: {
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: radius ? (radius in theme.radius ? theme.radius[radius] : radius) : 0,
    },

    placeholder: {
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      color: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[2] : theme.colorPalettes.dark[8],
      backgroundColor: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[8] : theme.colorPalettes.dark[2],
      borderRadius: radius ? (radius in theme.radius ? theme.radius[radius] : radius) : 0,
    },
  };
});
