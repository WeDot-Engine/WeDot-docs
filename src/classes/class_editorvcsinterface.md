<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorVCSInterface.xml。 -->

<div id="_class_editorvcsinterface"></div>

# EditorVCSInterface

**继承：** [`Object`](class_object.md)

Version Control System (VCS) interface, which reads and writes to the local VCS in use.

## 描述

Defines the API that the editor uses to extract information from the underlying VCS. The implementation of this API is included in VCS plugins, which are GDExtension plugins that inherit **EditorVCSInterface** and are attached (on demand) to the singleton instance of **EditorVCSInterface**. Instead of performing the task themselves, all the virtual functions listed below are calling the internally overridden functions in the VCS plugins to provide a plug-n-play experience. A custom VCS plugin is supposed to inherit from **EditorVCSInterface** and override each of these virtual functions.

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)                                     | [`_checkout_branch`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__checkout_branch) ( branch_name: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                       |
| `void`                                                      | [`_commit`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__commit) ( msg: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                                                 |
| `void`                                                      | [`_create_branch`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__create_branch) ( branch_name: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                           |
| `void`                                                      | [`_create_remote`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__create_remote) ( remote_name: [`String`](class_string.md), remote_url: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                  |
| `void`                                                      | [`_discard_file`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__discard_file) ( file_path: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                               |
| `void`                                                      | [`_fetch`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__fetch) ( remote: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                                                |
| [Array](class_array.md) [`String`](class_string.md)         | [`_get_branch_list`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__get_branch_list) ( ) virtual[^virtual]                                                                                                                                                                                                                                |
| [`String`](class_string.md)                                 | [`_get_current_branch_name`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__get_current_branch_name) ( ) virtual[^virtual]                                                                                                                                                                                                                |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_get_diff`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__get_diff) ( identifier: [`String`](class_string.md), area: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                         |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_get_line_diff`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__get_line_diff) ( file_path: [`String`](class_string.md), text: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                          |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_get_modified_files_data`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__get_modified_files_data) ( ) virtual[^virtual]                                                                                                                                                                                                                |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_get_previous_commits`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__get_previous_commits) ( max_commits: [`int`](class_int.md) ) virtual[^virtual]                                                                                                                                                                                   |
| [Array](class_array.md) [`String`](class_string.md)         | [`_get_remotes`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__get_remotes) ( ) virtual[^virtual]                                                                                                                                                                                                                                        |
| [`String`](class_string.md)                                 | [`_get_vcs_name`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__get_vcs_name) ( ) virtual[^virtual]                                                                                                                                                                                                                                      |
| [`bool`](class_bool.md)                                     | [`_initialize`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__initialize) ( project_path: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                                |
| `void`                                                      | [`_pull`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__pull) ( remote: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                                                  |
| `void`                                                      | [`_push`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__push) ( remote: [`String`](class_string.md), force: [`bool`](class_bool.md) ) virtual[^virtual]                                                                                                                                                                                  |
| `void`                                                      | [`_remove_branch`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__remove_branch) ( branch_name: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                           |
| `void`                                                      | [`_remove_remote`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__remove_remote) ( remote_name: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                           |
| `void`                                                      | [`_set_credentials`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__set_credentials) ( username: [`String`](class_string.md), password: [`String`](class_string.md), ssh_public_key_path: [`String`](class_string.md), ssh_private_key_path: [`String`](class_string.md), ssh_passphrase: [`String`](class_string.md) ) virtual[^virtual] |
| [`bool`](class_bool.md)                                     | [`_shut_down`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__shut_down) ( ) virtual[^virtual]                                                                                                                                                                                                                                            |
| `void`                                                      | [`_stage_file`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__stage_file) ( file_path: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                                   |
| `void`                                                      | [`_unstage_file`](class_editorvcsinterface.md#class_editorvcsinterface_private_method__unstage_file) ( file_path: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                                                                                               |
| [`Dictionary`](class_dictionary.md)                         | [`add_diff_hunks_into_diff_file`](class_editorvcsinterface.md#class_editorvcsinterface_method_add_diff_hunks_into_diff_file) ( diff_file: [`Dictionary`](class_dictionary.md), diff_hunks: [Array](class_array.md) [`Dictionary`](class_dictionary.md) )                                                                                                        |
| [`Dictionary`](class_dictionary.md)                         | [`add_line_diffs_into_diff_hunk`](class_editorvcsinterface.md#class_editorvcsinterface_method_add_line_diffs_into_diff_hunk) ( diff_hunk: [`Dictionary`](class_dictionary.md), line_diffs: [Array](class_array.md) [`Dictionary`](class_dictionary.md) )                                                                                                        |
| [`Dictionary`](class_dictionary.md)                         | [`create_commit`](class_editorvcsinterface.md#class_editorvcsinterface_method_create_commit) ( msg: [`String`](class_string.md), author: [`String`](class_string.md), id: [`String`](class_string.md), unix_timestamp: [`int`](class_int.md), offset_minutes: [`int`](class_int.md) )                                                                           |
| [`Dictionary`](class_dictionary.md)                         | [`create_diff_file`](class_editorvcsinterface.md#class_editorvcsinterface_method_create_diff_file) ( new_file: [`String`](class_string.md), old_file: [`String`](class_string.md) )                                                                                                                                                                             |
| [`Dictionary`](class_dictionary.md)                         | [`create_diff_hunk`](class_editorvcsinterface.md#class_editorvcsinterface_method_create_diff_hunk) ( old_start: [`int`](class_int.md), new_start: [`int`](class_int.md), old_lines: [`int`](class_int.md), new_lines: [`int`](class_int.md) )                                                                                                                   |
| [`Dictionary`](class_dictionary.md)                         | [`create_diff_line`](class_editorvcsinterface.md#class_editorvcsinterface_method_create_diff_line) ( new_line_no: [`int`](class_int.md), old_line_no: [`int`](class_int.md), content: [`String`](class_string.md), status: [`String`](class_string.md) )                                                                                                        |
| [`Dictionary`](class_dictionary.md)                         | [`create_status_file`](class_editorvcsinterface.md#class_editorvcsinterface_method_create_status_file) ( file_path: [`String`](class_string.md), change_type: [ChangeType](#enum_editorvcsinterface_changetype), area: [TreeArea](#enum_editorvcsinterface_treearea) )                                                                                          |
| `void`                                                      | [`popup_error`](class_editorvcsinterface.md#class_editorvcsinterface_method_popup_error) ( msg: [`String`](class_string.md) )                                                                                                                                                                                                                                   |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_editorvcsinterface_changetype"></div>

enum **ChangeType**: <div id="enum_editorvcsinterface_changetype"></div>

<div id="_class_editorvcsinterface_constant_change_type_new"></div>

[ChangeType](#enum_editorvcsinterface_changetype) **CHANGE_TYPE_NEW** = ``0``

A new file has been added.

<div id="_class_editorvcsinterface_constant_change_type_modified"></div>

[ChangeType](#enum_editorvcsinterface_changetype) **CHANGE_TYPE_MODIFIED** = ``1``

An earlier added file has been modified.

<div id="_class_editorvcsinterface_constant_change_type_renamed"></div>

[ChangeType](#enum_editorvcsinterface_changetype) **CHANGE_TYPE_RENAMED** = ``2``

An earlier added file has been renamed.

<div id="_class_editorvcsinterface_constant_change_type_deleted"></div>

[ChangeType](#enum_editorvcsinterface_changetype) **CHANGE_TYPE_DELETED** = ``3``

An earlier added file has been deleted.

<div id="_class_editorvcsinterface_constant_change_type_typechange"></div>

[ChangeType](#enum_editorvcsinterface_changetype) **CHANGE_TYPE_TYPECHANGE** = ``4``

An earlier added file has been typechanged.

<div id="_class_editorvcsinterface_constant_change_type_unmerged"></div>

[ChangeType](#enum_editorvcsinterface_changetype) **CHANGE_TYPE_UNMERGED** = ``5``

A file is left unmerged.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_editorvcsinterface_treearea"></div>

enum **TreeArea**: <div id="enum_editorvcsinterface_treearea"></div>

<div id="_class_editorvcsinterface_constant_tree_area_commit"></div>

[TreeArea](#enum_editorvcsinterface_treearea) **TREE_AREA_COMMIT** = ``0``

A commit is encountered from the commit area.

<div id="_class_editorvcsinterface_constant_tree_area_staged"></div>

[TreeArea](#enum_editorvcsinterface_treearea) **TREE_AREA_STAGED** = ``1``

A file is encountered from the staged area.

<div id="_class_editorvcsinterface_constant_tree_area_unstaged"></div>

[TreeArea](#enum_editorvcsinterface_treearea) **TREE_AREA_UNSTAGED** = ``2``

A file is encountered from the unstaged area.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorvcsinterface_private_method__checkout_branch"></div>

[`bool`](class_bool.md) **_checkout_branch** ( branch_name: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__checkout_branch"></div>

Checks out a `branch_name` in the VCS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__commit"></div>

`void` **_commit** ( msg: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__commit"></div>

Commits the currently staged changes and applies the commit `msg` to the resulting commit.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__create_branch"></div>

`void` **_create_branch** ( branch_name: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__create_branch"></div>

Creates a new branch named `branch_name` in the VCS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__create_remote"></div>

`void` **_create_remote** ( remote_name: [`String`](class_string.md), remote_url: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__create_remote"></div>

Creates a new remote destination with name `remote_name` and points it to `remote_url`. This can be an HTTPS remote or an SSH remote.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__discard_file"></div>

`void` **_discard_file** ( file_path: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__discard_file"></div>

Discards the changes made in a file present at `file_path`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__fetch"></div>

`void` **_fetch** ( remote: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__fetch"></div>

Fetches new changes from the `remote`, but doesn't write changes to the current working directory. Equivalent to `git fetch`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__get_branch_list"></div>

[Array](class_array.md) [`String`](class_string.md) **_get_branch_list** ( ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__get_branch_list"></div>

Gets an instance of an [`Array`](class_array.md) of [`String`](class_string.md) s containing available branch names in the VCS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__get_current_branch_name"></div>

[`String`](class_string.md) **_get_current_branch_name** ( ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__get_current_branch_name"></div>

Gets the current branch name defined in the VCS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__get_diff"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_get_diff** ( identifier: [`String`](class_string.md), area: [`int`](class_int.md) ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__get_diff"></div>

Returns an array of [`Dictionary`](class_dictionary.md) items (see [`create_diff_file`](class_editorvcsinterface.md#class_editorvcsinterface_method_create_diff_file), [`create_diff_hunk`](class_editorvcsinterface.md#class_editorvcsinterface_method_create_diff_hunk), [`create_diff_line`](class_editorvcsinterface.md#class_editorvcsinterface_method_create_diff_line), [`add_line_diffs_into_diff_hunk`](class_editorvcsinterface.md#class_editorvcsinterface_method_add_line_diffs_into_diff_hunk) and [`add_diff_hunks_into_diff_file`](class_editorvcsinterface.md#class_editorvcsinterface_method_add_diff_hunks_into_diff_file)), each containing information about a diff. If `identifier` is a file path, returns a file diff, and if it is a commit identifier, then returns a commit diff.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__get_line_diff"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_get_line_diff** ( file_path: [`String`](class_string.md), text: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__get_line_diff"></div>

Returns an [`Array`](class_array.md) of [`Dictionary`](class_dictionary.md) items (see [`create_diff_hunk`](class_editorvcsinterface.md#class_editorvcsinterface_method_create_diff_hunk)), each containing a line diff between a file at `file_path` and the `text` which is passed in.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__get_modified_files_data"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_get_modified_files_data** ( ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__get_modified_files_data"></div>

Returns an [`Array`](class_array.md) of [`Dictionary`](class_dictionary.md) items (see [`create_status_file`](class_editorvcsinterface.md#class_editorvcsinterface_method_create_status_file)), each containing the status data of every modified file in the project folder.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__get_previous_commits"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_get_previous_commits** ( max_commits: [`int`](class_int.md) ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__get_previous_commits"></div>

Returns an [`Array`](class_array.md) of [`Dictionary`](class_dictionary.md) items (see [`create_commit`](class_editorvcsinterface.md#class_editorvcsinterface_method_create_commit)), each containing the data for a past commit.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__get_remotes"></div>

[Array](class_array.md) [`String`](class_string.md) **_get_remotes** ( ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__get_remotes"></div>

Returns an [`Array`](class_array.md) of [`String`](class_string.md) s, each containing the name of a remote configured in the VCS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__get_vcs_name"></div>

[`String`](class_string.md) **_get_vcs_name** ( ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__get_vcs_name"></div>

Returns the name of the underlying VCS provider.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__initialize"></div>

[`bool`](class_bool.md) **_initialize** ( project_path: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__initialize"></div>

Initializes the VCS plugin when called from the editor. Returns whether or not the plugin was successfully initialized. A VCS project is initialized at `project_path`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__pull"></div>

`void` **_pull** ( remote: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__pull"></div>

Pulls changes from the remote. This can give rise to merge conflicts.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__push"></div>

`void` **_push** ( remote: [`String`](class_string.md), force: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__push"></div>

Pushes changes to the `remote`. If `force` is `true`, a force push will override the change history already present on the remote.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__remove_branch"></div>

`void` **_remove_branch** ( branch_name: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__remove_branch"></div>

Remove a branch from the local VCS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__remove_remote"></div>

`void` **_remove_remote** ( remote_name: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__remove_remote"></div>

Remove a remote from the local VCS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__set_credentials"></div>

`void` **_set_credentials** ( username: [`String`](class_string.md), password: [`String`](class_string.md), ssh_public_key_path: [`String`](class_string.md), ssh_private_key_path: [`String`](class_string.md), ssh_passphrase: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__set_credentials"></div>

Set user credentials in the underlying VCS. `username` and `password` are used only during HTTPS authentication unless not already mentioned in the remote URL. `ssh_public_key_path`, `ssh_private_key_path`, and `ssh_passphrase` are only used during SSH authentication.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__shut_down"></div>

[`bool`](class_bool.md) **_shut_down** ( ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__shut_down"></div>

Shuts down VCS plugin instance. Called when the user either closes the editor or shuts down the VCS plugin through the editor UI.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__stage_file"></div>

`void` **_stage_file** ( file_path: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__stage_file"></div>

Stages the file present at `file_path` to the staged area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_private_method__unstage_file"></div>

`void` **_unstage_file** ( file_path: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorvcsinterface_private_method__unstage_file"></div>

Unstages the file present at `file_path` from the staged area to the unstaged area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_method_add_diff_hunks_into_diff_file"></div>

[`Dictionary`](class_dictionary.md) **add_diff_hunks_into_diff_file** ( diff_file: [`Dictionary`](class_dictionary.md), diff_hunks: [Array](class_array.md) [`Dictionary`](class_dictionary.md) )<div id="class_editorvcsinterface_method_add_diff_hunks_into_diff_file"></div>

Helper function to add an array of `diff_hunks` into a `diff_file`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_method_add_line_diffs_into_diff_hunk"></div>

[`Dictionary`](class_dictionary.md) **add_line_diffs_into_diff_hunk** ( diff_hunk: [`Dictionary`](class_dictionary.md), line_diffs: [Array](class_array.md) [`Dictionary`](class_dictionary.md) )<div id="class_editorvcsinterface_method_add_line_diffs_into_diff_hunk"></div>

Helper function to add an array of `line_diffs` into a `diff_hunk`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_method_create_commit"></div>

[`Dictionary`](class_dictionary.md) **create_commit** ( msg: [`String`](class_string.md), author: [`String`](class_string.md), id: [`String`](class_string.md), unix_timestamp: [`int`](class_int.md), offset_minutes: [`int`](class_int.md) )<div id="class_editorvcsinterface_method_create_commit"></div>

Helper function to create a commit [`Dictionary`](class_dictionary.md) item. `msg` is the commit message of the commit. `author` is a single human-readable string containing all the author's details, e.g. the email and name configured in the VCS. `id` is the identifier of the commit, in whichever format your VCS may provide an identifier to commits. `unix_timestamp` is the UTC Unix timestamp of when the commit was created. `offset_minutes` is the timezone offset in minutes, recorded from the system timezone where the commit was created.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_method_create_diff_file"></div>

[`Dictionary`](class_dictionary.md) **create_diff_file** ( new_file: [`String`](class_string.md), old_file: [`String`](class_string.md) )<div id="class_editorvcsinterface_method_create_diff_file"></div>

Helper function to create a [`Dictionary`](class_dictionary.md) for storing old and new diff file paths.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_method_create_diff_hunk"></div>

[`Dictionary`](class_dictionary.md) **create_diff_hunk** ( old_start: [`int`](class_int.md), new_start: [`int`](class_int.md), old_lines: [`int`](class_int.md), new_lines: [`int`](class_int.md) )<div id="class_editorvcsinterface_method_create_diff_hunk"></div>

Helper function to create a [`Dictionary`](class_dictionary.md) for storing diff hunk data. `old_start` is the starting line number in old file. `new_start` is the starting line number in new file. `old_lines` is the number of lines in the old file. `new_lines` is the number of lines in the new file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_method_create_diff_line"></div>

[`Dictionary`](class_dictionary.md) **create_diff_line** ( new_line_no: [`int`](class_int.md), old_line_no: [`int`](class_int.md), content: [`String`](class_string.md), status: [`String`](class_string.md) )<div id="class_editorvcsinterface_method_create_diff_line"></div>

Helper function to create a [`Dictionary`](class_dictionary.md) for storing a line diff. `new_line_no` is the line number in the new file (can be `-1` if the line is deleted). `old_line_no` is the line number in the old file (can be `-1` if the line is added). `content` is the diff text. `status` is a single character string which stores the line origin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_method_create_status_file"></div>

[`Dictionary`](class_dictionary.md) **create_status_file** ( file_path: [`String`](class_string.md), change_type: [ChangeType](#enum_editorvcsinterface_changetype), area: [TreeArea](#enum_editorvcsinterface_treearea) )<div id="class_editorvcsinterface_method_create_status_file"></div>

Helper function to create a [`Dictionary`](class_dictionary.md) used by editor to read the status of a file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorvcsinterface_method_popup_error"></div>

`void` **popup_error** ( msg: [`String`](class_string.md) )<div id="class_editorvcsinterface_method_popup_error"></div>

Pops up an error message in the editor which is shown as coming from the underlying VCS. Use this to show VCS specific error messages.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
