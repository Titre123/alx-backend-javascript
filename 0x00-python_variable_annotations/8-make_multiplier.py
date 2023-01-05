#!/usr/bin/env python3
'''
    8-main
    Write a type-annotated function make_multiplier that takes a float multipli
    er as argument and returns a function that multiplies a float by multiplier
'''
import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    '''
    Args:
        @multiplier: float
    Returns:
        function that multiply multiplier by float-> callable
    '''
    return lambda float : float * multiplier
