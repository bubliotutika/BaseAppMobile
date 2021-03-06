import {StyleSheet} from 'react-native';

// Local Import
import Theme from '../../assets/styles/Theme';

const getStyle = (options = {}) => {
  const theme = Theme.getTheme();
  const padding = 20;

  return StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: padding / 3,
      paddingBottom: padding / 3,
      paddingLeft: padding,
      paddingRight: padding,
      backgroundColor: theme.borderColor,
      borderRadius: 20,
      ...theme.hoverShadow,
      ...options.containerStyle,
    },
  
    text: {
      fontSize: 20,
      color: theme.buttonTextColor,
      ...options.buttonStyle,
    },
  });
}

// Export
export default getStyle;