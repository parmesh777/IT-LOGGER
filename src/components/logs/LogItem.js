import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deletelog, setCurrent } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deletelog, setCurrent }) => {
  const onDelete = () => {
    deletelog(log.id);
    M.toast({ html: `Log Deleted` });
  };
  return (
    <li className="collection-header">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          } `}
          style={{
            fontWeight: "bold",
            fontSize: "14px",
            fontFamily: "Arial",
          }}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="green-text">ID #{log.id}</span> last updated by{" "}
          <span
            className="purple-text"
            style={{
              fontWeight: "bold",
              fontSize: "13px",
            }}
          >
            {log.tech}
          </span>
          &nbsp;on <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons red-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default connect(null, { deletelog, setCurrent })(LogItem);
