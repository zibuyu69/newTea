import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import "./style.less";
import * as actionCreators from "./store/actionCreators";
import { Spin } from "antd";
import { ImagePicker, WingBlank, SegmentedControl, Button } from "antd-mobile";

function Login(props) {
  const { loading, history } = props;

  const [data, setData] = useState([
    {
      url: "https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",
      id: "2121",
    },
    {
      url: "https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",
      id: "2122",
    },
  ]);

  const testClick = () => {
    props.mergeData({
      type: "registerReducer/MERGE_DATA",
      payload: { test: props.state.test + 1 },
    });
  };
  const login = () => {
    window.sessionStorage.setItem("token", "222");
    history.push("/home");
  };
  const onChange = (files, type, index) => {
    console.log(files, type, index);
    setData(files);
  };
  return (
    <div className="login">
      <div className="title">
        <WingBlank>
          <Button
            onClick={() => {
              history.push("/b/bigHome");
            }}
          >
            第二版
          </Button>
          <br />
          <Button onClick={login}>新闻主页</Button>
          <br />
          <Button
            onClick={() => {
              history.push("/b/queryhome");
            }}
          >
            搜索主页
          </Button>
          {/* <ImagePicker
            files={data}
            onChange={onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
          /> */}
        </WingBlank>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  // state: state.registerReducer
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  mergeData: (data) => {
    dispatch({ type: data.type, payload: data.payload });
  },
  /*  getallData: data => {
    dispatch(actionCreators.getallData(data));
  } */
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
