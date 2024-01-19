export default function TweetIcon(props) {
    return (
        <div>
            <img  className="" src={props.icon} alt="icon" />
            <span>{props.count}</span>
        </div>
    );
}