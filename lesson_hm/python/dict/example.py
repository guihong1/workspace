def Merge(dict1, dict2):
    # 使用字典解包的方式将 dict1 和 dict2 合并到新字典 res 中
    res = {**dict1, **dict2}
    return res

# js 对象字面量 python 字典 key:value 键值对
dict1 = {"a": 1, "b": 2}
dict2 = {"a": 3, "d": 4}
dict3 = Merge(dict1, dict2)
print(dict3)