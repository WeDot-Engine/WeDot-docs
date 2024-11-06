#!/usr/bin/env python3

import subprocess
import sys
def replace_site_url(file_path, branch_name):
    """替换文件中的 {site.url} 为当前分支名称"""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        new_content = content.replace('{site.url}', branch_name)
        
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(new_content)
        
        print(f"用{branch_name} in {file_path}" + "替换{site.url}。")
    except Exception as e:
        print(f"替换 site url 时出错：{e}")
        sys.exit(1)

if __name__ == "__main__":
    """
    将指定文件中的 {site.url} 替换为当前分支名称。

    :param file_path: 欲替换的源文件路径
    :param branch_name: 目标文件路径
    """
    if len(sys.argv) != 3:
        print("使用方法：python replace_site_url.py <文件> <分支名称>")
        sys.exit(1)
    
    file_path = sys.argv[1]
    branch_name = sys.argv[2]
    replace_site_url(file_path, branch_name)