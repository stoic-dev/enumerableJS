export type AggregationExpression<
    TSource,
    TAccumulate = TSource,
    TResult = TAccumulate
> = (accumulate: TAccumulate, current: TSource) => TResult;
