#!/usr/bin/env python3
'''
    2-floor.py:
    Write a type-annotated function floor which takes a
    float n as argument and returns the floor of the float.
'''
import math


def floor(n: float) -> int:
    '''
    Args:
        @n: float
    Returns:
        floor of n -> int
    '''
    return math.floor(n)
