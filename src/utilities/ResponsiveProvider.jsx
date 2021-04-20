import PropTypes from 'prop-types';

const ResponsiveProvider = ({ render }) => {
  const windowMode = window.innerWidth < 576?'sm':window.innerWidth < 900?'md':'lg'

  return render(windowMode)
}

ResponsiveProvider.propTypes = {
    render: PropTypes.func
}

export default ResponsiveProvider