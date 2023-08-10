import { createStyles } from '@co-design/styles';

interface CheckboxStyles {}

// &:hover,
// &:focus {
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     border-radius: 2px;
//     z-index: -1;
//     box-sizing: border-box;
//     background-color: ${theme.palettes.gray[3]};
//   }

//   &::selection {
//     background-color: ${theme.palettes.purple[6]};
//     border-color: ${theme.palettes.purple[7]};
//   }
// }

// &:active {
//   &::before {
//     content: '';
//     position: absolute;
//     top: -2px;
//     right: -2px;
//     bottom: -2px;
//     left: -2px;
//     border-radius: 2px;
//     z-index: -1;
//   }
// }

// input {
//   position: absolute;
//   width: 0px;
//   height: 0px;
//   opacity: 0;
// }

// .${classPrefix}--checkmark {
//   display: inline-block;
//   width: 20px;
//   height: 20px;
//   vertical-align: middle;
// }

// .${classPrefix}--text {
//   padding-left: 4px;
//   font-size: 14px;
//   line-height: 20px;
//   vertical-align: middle;
// }

// &.${classPrefix}--disabled {
//   cursor: not-allowed;
//   color: #c6c6c6;
// }

// &.${classPrefix}--block {
//   display: flex;
// }

export default createStyles((theme) => {
  return {
    wrapper: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      userSelect: 'none',
      verticalAlign: 'middle',
      zIndex: 0,
      '&:hover, &:focus': {
        '&::before': {
          content: '',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          borderRadius: '2px',
          zIndex: -1,
          boxSizing: 'border-box',
          backgroundColor: theme.palettes.gray[3],
        },
        '&::selection': {
          backgroundColor: theme.palettes.purple[6],
          borderColor: theme.palettes.purple[7],
        },
      },
      '&:active': {
        '&::before': {
          content: '',
          position: 'absolute',
          top: '-2px',
          right: '-2px',
          bottom: '-2px',
          left: '-2px',
          borderRadius: '2px',
          zIndex: '-1',
        },
      },
    },
    input: {
      position: 'absolute',
      width: '0px',
      height: '0px',
      opacity: 0,
    },
    checkmark: {
      display: 'inline-block',
      width: '20px',
      height: '20px',
      verticalAlign: 'middle',
    },
  };
});
