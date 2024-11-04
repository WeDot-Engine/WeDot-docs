#!/usr/bin/env python3

import os
import sys
import re

def classes_index_to_summary(src_file, dest_file):
    """
    将指定文件中的内容转化为目录格式写入 SUMMARY.md 文件的 <!-- 类 --><!-- 类结束 --> 之间。

    - 一级标题：
      - 直接写入 SUMMARY.md：# 标题内容\n\n；
    - 二级标题：
      - 转换为一级标题写入 `src_path/标题内容.md`；
      - 转换为 `- [标题内容](classes/index.md#标题内容)\n` 写入 SUMMARY.md；
    - 原有链接：
      - 写入 SUMMARY.md：`  - [原有链接文字](原有链接)\n`。
    """
    with open(src_file, 'r', encoding='utf-8') as file:
        content = file.read()

    # 解析内容
    lines = content.split('\n')
    summary_lines = []

    # 获取源文件路径
    src_path = os.path.dirname(src_file)
    # 确保 src_path 以 / 结尾
    src_path = os.path.join(src_path, '')
    
    # 定义当前二级文件名和子目录内容
    sub_summary_file = 'unused.md'
    sub_summary_lines = []
    summary_lines.append('<!-- 类相关内容由脚本生成，请勿直接更改 -->\n<!-- 脚本：https://github.com/WeDot-Engine/WeDot-docs/blob/latest/scripts/classes_index_to_summary.py -->\n\n')

    for line in lines:
        # 处理一级标题
        if line.startswith('# '):
            title = line[2:].strip()
            summary_lines.append(f'# {title}\n\n')
            summary_lines.append(f'- [{title}](classes/index.md)\n')
        # 处理二级标题
        elif line.startswith('## '):
            title = line[3:].strip()
            """
            当第二次解析到二级标题时，说明之前的内容已经解析完毕，可以写入到 sub_summary 文件中。
            """
            if sub_summary_file != f'{title}.md':
                if sub_summary_file != 'unused.md':
                    with open(f'{src_path}{sub_summary_file}', 'w', encoding='utf-8') as f:
                        f.write(''.join(sub_summary_lines))
                    sub_summary_lines = []
                sub_summary_file = f'{title}.md'
                sub_summary_lines.append(f'# {title}\n\n')
            
            summary_lines.append(f'- [{title}](classes/{sub_summary_file})\n')
        # 处理原有链接
        elif re.match(r'- \[.*?\]\(.*?\)', line):
            match = re.search(r'- \[(.*?)\]\((.*?)\)', line)
            link_text = match.group(1)
            link_url = match.group(2)
            summary_lines.append(f'  - [{link_text}](classes/{link_url})\n')
            if sub_summary_file != 'unused.md':
                sub_summary_lines.append(f'- [{link_text}]({link_url})\n')
    
    # 写入最后一个子目录
    if sub_summary_lines != []:
        with open(f'{src_path}{sub_summary_file}', 'w', encoding='utf-8') as f:
            f.write(''.join(sub_summary_lines))

    # 读取并更新 SUMMARY.md 文件
    with open(dest_file, 'r', encoding='utf-8') as file:
        summary_content = file.read()

    start_marker = '<!-- 类 -->'
    end_marker = '<!-- 类结束 -->'

    start_index = summary_content.find(start_marker) + len(start_marker)
    end_index = summary_content.find(end_marker)

    if not start_index or not end_index:
        print("未找到标记，无法插入内容。")
        exit(1)

    new_summary_content = (
        summary_content[:start_index] + '\n' +
        ''.join(summary_lines) + '\n' +
        summary_content[end_index:]
    )

    with open(dest_file, 'w', encoding='utf-8') as file:
        file.write(new_summary_content)
    
    print(f"已生成并写入 {dest_file}。")

if __name__ == "__main__":
    """
    将指定文件中的内容转化为目录格式写入 SUMMARY.md 文件。

    :param src_file: 源文件路径
    :param dest_file: 目标文件路径
    """
    if len(sys.argv) != 3:
        print("使用方法：python classes_index_to_summary.py <index.md 文件> <SUMMARY.md 文件>")
        sys.exit(1)

    src_file = sys.argv[1]
    dest_file = sys.argv[2]

    # 检查文件是否存在
    if not os.path.exists(src_file) or not os.path.exists(dest_file):
        print(f"错误：文件 {src_file} 或 {dest_file} 不存在")
        sys.exit(1)
    classes_index_to_summary(src_file, dest_file)