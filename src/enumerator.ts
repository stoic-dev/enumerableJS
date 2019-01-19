export interface IEnumerator<TElement> {
    getCurrent(): TElement;
    moveNext(): boolean;
}
