// @flow
import React, { Component } from 'react';
import { Alert } from 'antd';
// import 'antd/dist/antd.css';


class Home extends Component {

  render() {
    return (
      <div>
        <Alert message="Success Tips" type="success" showIcon />
        <Alert message="Informational Notes" type="info" showIcon />
        <Alert message="Warning" type="warning" showIcon />
        <Alert message="Error" type="error" showIcon />
        <Alert
          message="success tips"
          description="Detailed description and advices about successful copywriting."
          type="success"
          showIcon
        />
        <Alert
          message="Informational Notes"
          description="Additional description and informations about copywriting."
          type="info"
          showIcon
        />
        <Alert
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
        />
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
        />
      </div>
    );
  }
}

export default Home;
