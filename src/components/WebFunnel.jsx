import React from 'react';
import { Row, Col, Button } from 'antd';

// phone number validation module and stying
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

// Import css modules stylesheet as styles
import styles from './WebFunnel.module.css';


export default class WebFunnel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: ""
    }
  }

  setPhoneNumber = (number) => {
    if (number !== undefined) {
      this.setState({
        phoneNumber: number
      })
    }
  }

  onDownloadClicked = () => {
    console.log(`Placeholder function that sends the ${this.state.phoneNumber} to a [currently non-existent] backend endpoint ${this.phoneNumber} to Api endpoint`)
  }


  render() {
    const { groupName, charity, logoUrl } = this.props 
    const { phoneNumber } = this.state

    const isValid = phoneNumber && isValidPhoneNumber(phoneNumber) ? true : false

    return (
      <div className={styles.wrapper}>
        {logoUrl !== undefined && (
          <Row 
            justify="center"
            className="logo"
          >
            <Col xs={22} sm={22} md={16} lg={12}>
              <img src={logoUrl} className={styles.logo} alt="logo" />
            </Col>
          </Row>
        )}
        <Row 
          justify="center"
          className="web-funnel-title"
        >
          <Col xs={22} sm={22} md={16} lg={12}>
            <h1>Help {groupName} Win $6000 for {charity}</h1>
          </Col>
        </Row>

        <Row justify="center"  className="web-funnel-sub-title">
          <Col xs={22} sm={22} md={16} lg={12}>
            <h4>Kick it with {groupName} on our friend map!</h4>
          </Col>
        </Row>

        <Row justify="center"  className={styles.phone}>
          <Col xs={22} sm={22} md={16} lg={12}>
             <PhoneInput
              defaultCountry="US"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={ this.setPhoneNumber }
              error={phoneNumber ? (isValidPhoneNumber(phoneNumber) ? undefined : 'Invalid phone number') : 'Phone number required'}
            />
            <Button
              disabled={!isValid}
              className={styles.downloadBtn}
              type="primary"
              block
              onClick={this.onDownloadClicked}
            >
              Download
            </Button>
          </Col>
        </Row>

        <Row justify="center"  className={styles.privacy}>
          <Col xs={22} sm={22} md={16} lg={12}>
            <h4>We value your privacy and trust and promise to never, ever sell your data.</h4>
          </Col>
        </Row>
      </div>
    )
  }
}