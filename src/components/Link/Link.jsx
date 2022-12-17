import './Link.css';

function Link(props) {
    const {href, text} = props;

    return (
        <a href={href}>{text}</a>
    );
}
export default Link;