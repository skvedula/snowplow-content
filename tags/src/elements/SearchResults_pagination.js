export default function SearchResults_pagination(newPage) {
	var attrArray=[];
    attrArray[9] = digitalData.page.category.category;
    attrArray[37] = digitalData.page.pageInfo.onsiteSearchTerm;
	cmCreateElementTag(newPage, 'Results Pagination', attrArray.join('-_-'));
	spCreateElementTag(newPage, 'Results Pagination', attrArray.join('-_-'));
}