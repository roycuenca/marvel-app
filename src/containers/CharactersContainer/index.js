import { connect } from 'react-redux';
import { fetchCharactersAction, fetchComicsAction } from '../../store/actions';
import { Characters } from '../../components';

const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
    characters: state.characters.data,
});

const mapActionToProps = {
    fetchCharactersAction,
    fetchComicsAction,
};

export default connect(mapStateToProps, mapActionToProps)(Characters);