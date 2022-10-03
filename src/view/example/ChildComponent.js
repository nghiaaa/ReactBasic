import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    // let check = showJobs === true? 'showJobs = true': 'showJobs = false';

    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>show</button>
          </div>
        ) : (
          <>
            <div className="job-list">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} $
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   let { arrJobs } = props;
//   return (
//     <>
//       <div className="job-list"></div>
//       {arrJobs.map((item, index) => {
//         return (
//           <div key={item.id}>
//             {item.title} - {item.salary}
//           </div>
//         );
//       })}
//     </>
//   );
// };
export default ChildComponent;
