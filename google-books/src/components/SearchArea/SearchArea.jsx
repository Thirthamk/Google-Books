const SearchArea = ({ Submit, Change }) => {
    return (
        <form onSubmit={Submit}>
            <div>
                <input
                    className="form"
                    type="text"
                    onChange={Change}
                    placeholder="please search your books here"
                ></input>
            </div>
            <button type="submit" className="btn">
                Search
            </button>
        </form>
    );
};

export default SearchArea;
