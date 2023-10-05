import LinkedList from '../helpers/linked_list.js';
import getListFromArray from '../helpers/get_list_from_array';

export default (collection) => {
    const list = getListFromArray(collection);

    const reversedList = new LinkedList();

    if (!list.head) {
        return reversedList.toArray();
    }

    reversedList.prepend(list.head.value);
    let nextNode = list.head.next;
    while (nextNode !== null) {
        reversedList.prepend(nextNode.value);
        nextNode = nextNode.next;
    }

    return reversedList.toArray();
};
