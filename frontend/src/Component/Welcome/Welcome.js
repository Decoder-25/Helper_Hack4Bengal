import "./Welcome.css"

const Welcome = (props) => {
  return (
    <div className="flex-container">
      <div className="body">
        <h1><b>Welcome to Job Portal</b></h1>
        <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consequatur ad nihil aliquam placeat recusandae labore libero itaque ipsum quibusdam sunt? Veritatis dolores id, aut totam aperiam dolor sequi sunt.</b></p>
      </div>
      <div className="image">
        <img src='./images/maid.png' alt="image" />
      </div>
    </div>
  );
};

export const ErrorPage = (props) => {
  return (
    <div>
      <div>
        <h2>ERROR 404</h2>
      </div>
    </div>
  );
};

export default Welcome;

