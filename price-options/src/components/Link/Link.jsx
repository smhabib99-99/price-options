import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="hover:bg-sky-500 rounded-md px-4 mr-8">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes ={
    route: PropTypes.object
}

export default Link;