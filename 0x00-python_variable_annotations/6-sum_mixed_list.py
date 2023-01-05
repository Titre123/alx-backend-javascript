#!/usr/bin/env python3
'''
    6-sum_mixed_list
    Write a type-annotated function sum_mixed_list which takes
    a list mxd_lst of integers and floats and returns their sum as a float
'''
import typing


def sum_mixed_list(mxd_lst: typing.List[typing.Union[int, float]]) -> float:
    '''
    Args:
        @mxd_lst: List of int or float
    Returns:
        sum of mxd_lst -> float
    '''
    return sum(mxd_lst)
