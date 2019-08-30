import React from 'react';
import {
  View
} from 'react-native';
import { connect } from 'react-redux';

// Local Import
import Style from './style';
import {userLogout, toggleTheme} from '../../../redux/action/UserAction';
import Button from '../../../components/Button';

import HeaderStyle from '../../../navigation/App/Button/style';

const mapStateToProps = state => {
  return { user: state.user };
}

const mapDispatchToProps = dispatch => ({
  userLogout: payload => dispatch(userLogout(payload || {})),
  toggleTheme: payload => dispatch(toggleTheme(payload || {})),
});

class SettingScreen extends React.Component {
  handleLogout = async () => {
    this.props.userLogout();
    this.props.navigation.navigate("AuthLoading");
  }

  handleToggleTheme = async () => {
    await this.props.toggleTheme();
  }

  render() {
    const S = Style();

    return(
      <View style={S.container}>

        <View style={S.logoutBtn}>

          <Button
            label="Logout"
            onPress={this.handleLogout}
          />

        </View>

        <View style={S.logoutBtn}>

          <Button
            label="toggle theme"
            onPress={this.handleToggleTheme}
          />

        </View>

      </View>
    )
  }
}

// Export
export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);