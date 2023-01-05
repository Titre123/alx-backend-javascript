#!/usr/bin/env python3
'''
    9-element_length
    Annotate the below function’s parameters and return values with the appropriate types
'''
import typing


def element_length(lst: typing.Iterable[typing.Sequence]) -> typing.List[typing.Tuple[typing.Sequence, int]]:
    '''
    Args:
        @lst: interable Squencs
    Returns:
        return values with the appropriate types
    '''
    return [(i, len(i)) for i in lst]
