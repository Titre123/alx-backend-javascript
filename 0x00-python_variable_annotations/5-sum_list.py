#!/usr/bin/env python3
'''
    5-sum_list
    Write a type-annotated function sum_list which takes a
    list input_list of floats as argument and returns their sum as a float.
'''
import typing


def sum_list(input_list: typing.List[float]) -> float:
    '''
    Args:
        @input_list: List of float
    Returns:
        sum of input_list -> float
    '''
    sum: float = 0
    for x in input_list:
        sum += x
    return sum
