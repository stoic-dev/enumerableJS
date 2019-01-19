import { IEnumerator } from './enumerator';
import {
    AggregationExpression,
    BooleanExpression,
    EqualityExpression,
    SelectionExpression
} from './expressions/expressions.index';

export interface IEnumerable<TSource> {
    getEnumerator(): IEnumerator<TSource>;
    aggregate<TAccumulate = TSource, TResult = TAccumulate>(
        predicate: AggregationExpression<TSource, TAccumulate, TResult>,
        seed?: TAccumulate
    ): TResult;
    all(predicate?: BooleanExpression<TSource>): boolean;
    any(predicate?: BooleanExpression<TSource>): boolean;
    append(element: TSource): IEnumerable<TSource>;
    average(selector?: SelectionExpression<TSource, number>): number;
    concat(target: IEnumerable<TSource>): IEnumerable<TSource>;
    contains(value: TSource, comparer?: EqualityExpression<TSource>): boolean;
    count(predicate?: BooleanExpression<TSource>): number;
    distinct(comparer?: EqualityExpression<TSource>): IEnumerable<TSource>;
    elementAt(index: number): TSource;
    except(
        target: IEnumerable<TSource>,
        comparer?: EqualityExpression<TSource>
    ): IEnumerable<TSource>;
    first(predicate?: BooleanExpression<TSource>): TSource;
    groupJoin<TTarget, TKey, TResult>(
        target: IEnumerable<TTarget>,
        sourceKeySelector: SelectionExpression<TSource, TKey>,
        targetKeySelector: SelectionExpression<TTarget, TKey>,
        resultSelector: SelectionExpression<TSource, TResult>,
        comparer?: EqualityExpression<TKey>
    ): IEnumerable<TResult>;
    intersect(
        target: IEnumerable<TSource>,
        comparer?: EqualityExpression<TSource>
    ): IEnumerable<TSource>;
    join<TTarget, TKey, TResult>(
        target: IEnumerable<TTarget>,
        sourceKeySelector: SelectionExpression<TSource, TKey>,
        targetKeySelector: SelectionExpression<TTarget, TKey>,
        resultSelector: SelectionExpression<TSource, TResult>,
        comparer?: EqualityExpression<TKey>
    ): IEnumerable<TResult>;
    last(predicate?: BooleanExpression<TSource>): TSource;
    max(selector?: SelectionExpression<TSource, number>): number;
    min(selector?: SelectionExpression<TSource, number>): number;
    prepend(element: TSource): IEnumerable<TSource>;
    reverse(): IEnumerable<TSource>;
    select<TResult>(
        selector: SelectionExpression<TSource, TResult>
    ): IEnumerable<TResult>;
    selectMany<TResult>(
        selector: SelectionExpression<TSource, IEnumerable<TResult>>
    ): IEnumerable<TResult>;
    sequenceEqual(
        target: IEnumerable<TSource>,
        comparer?: EqualityExpression<TSource>
    ): boolean;
    single(predicate?: BooleanExpression<TSource>): TSource;
    skip(count: number): IEnumerable<TSource>;
    skipLast(count: number): IEnumerable<TSource>;
    skipWhile(predicate: BooleanExpression<TSource>): IEnumerable<TSource>;
    sum(selector?: SelectionExpression<TSource, number>): number;
    take(count: number): IEnumerable<TSource>;
    takeLast(count: number): IEnumerable<TSource>;
    takeWhile(predicate: BooleanExpression<TSource>): IEnumerable<TSource>;
    union(
        target: IEnumerable<TSource>,
        comparer?: EqualityExpression<TSource>
    ): IEnumerable<TSource>;
    where(predicate: BooleanExpression<TSource>): IEnumerable<TSource>;
    zip<TTarget, TResult>(
        target: IEnumerable<TTarget>,
        resultSelector: SelectionExpression<
            { source: TSource; target: TTarget },
            TResult
        >
    ): IEnumerable<TResult>;
}
