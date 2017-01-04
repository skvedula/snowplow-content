/**
 * ShowMoreButton adds a flux action listener to register clicks on the Show
 * More button on search and browse pages.
 */
const ShowMoreButton = () => {
    nord.core.dispatcher.register(p => {
        if (p.action !== 'LoadMoreProducts') {
            return;
        }
        cmCreateElementTag('ShowMoreClick', 'Search and Browse');
        spCreateElementTag('ShowMoreClick', 'Search and Browse');
    });
}

export default ShowMoreButton;
