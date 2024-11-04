<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/MovieWriter.xml。 -->

<div id="_class_moviewriter"></div>

# MovieWriter

**继承：** [`Object`](class_object.md)

Abstract class for non-real-time video recording encoders.

## 描述

Godot can record videos with non-real-time simulation. Like the `--fixed-fps` [*command line argument*](../tutorials/editor/command_line_tutorial), this forces the reported `delta` in [`Node._process`](#class_node_private_method__process) functions to be identical across frames, regardless of how long it actually took to render the frame. This can be used to record high-quality videos with perfect frame pacing regardless of your hardware's capabilities.

Godot has 2 built-in **MovieWriter** s:

- AVI container with MJPEG for video and uncompressed audio (`.avi` file extension). Lossy compression, medium file sizes, fast encoding. The lossy compression quality can be adjusted by changing [`ProjectSettings.editor/movie_writer/mjpeg_quality`](#class_projectsettings_property_editor/movie_writer/mjpeg_quality). The resulting file can be viewed in most video players, but it must be converted to another format for viewing on the web or by Godot with [`VideoStreamPlayer`](class_videostreamplayer.md). MJPEG does not support transparency. AVI output is currently limited to a file of 4 GB in size at most.

- PNG image sequence for video and WAV for audio (`.png` file extension). Lossless compression, large file sizes, slow encoding. Designed to be encoded to a video file with another tool such as [*FFmpeg*](https://ffmpeg.org/) after recording. Transparency is currently not supported, even if the root viewport is set to be transparent.

If you need to encode to a different format or pipe a stream through third-party software, you can extend the **MovieWriter** class to create your own movie writers. This should typically be done using GDExtension for performance reasons.

 **Editor usage:** A default movie file path can be specified in [`ProjectSettings.editor/movie_writer/movie_file`](#class_projectsettings_property_editor/movie_writer/movie_file). Alternatively, for running single scenes, a `movie_file` metadata can be added to the root node, specifying the path to a movie file that will be used when recording that scene. Once a path is set, click the video reel icon in the top-right corner of the editor to enable Movie Maker mode, then run any scene as usual. The engine will start recording as soon as the splash screen is finished, and it will only stop recording when the engine quits. Click the video reel icon again to disable Movie Maker mode. Note that toggling Movie Maker mode does not affect project instances that are already running.

 **Note:** MovieWriter is available for use in both the editor and exported projects, but it is *not* designed for use by end users to record videos while playing. Players wishing to record gameplay videos should install tools such as [*OBS Studio*](https://obsproject.com/) or [*SimpleScreenRecorder*](https://www.maartenbaert.be/simplescreenrecorder/) instead.

## 方法

| [`int`](class_int.md)                        | [`_get_audio_mix_rate`](#class_moviewriter_private_method__get_audio_mix_rate) ( ) virtual[^virtual] const[^const]                                                                                     |
| [SpeakerMode](#enum_audioserver_speakermode) | [`_get_audio_speaker_mode`](#class_moviewriter_private_method__get_audio_speaker_mode) ( ) virtual[^virtual] const[^const]                                                                             |
| [`bool`](class_bool.md)                      | [`_handles_file`](#class_moviewriter_private_method__handles_file) ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                               |
| [Error](#enum_@globalscope_error)            | [`_write_begin`](#class_moviewriter_private_method__write_begin) ( movie_size: [`Vector2i`](class_vector2i.md), fps: [`int`](class_int.md), base_path: [`String`](class_string.md) ) virtual[^virtual] |
| `void`                                       | [`_write_end`](#class_moviewriter_private_method__write_end) ( ) virtual[^virtual]                                                                                                                     |
| [Error](#enum_@globalscope_error)            | [`_write_frame`](#class_moviewriter_private_method__write_frame) ( frame_image: [`Image`](class_image.md), audio_frame_block: `const void*` ) virtual[^virtual]                                        |
| `void`                                       | [`add_writer`](#class_moviewriter_method_add_writer) ( writer: [`MovieWriter`](class_moviewriter.md) ) static[^static]                                                                                 |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_moviewriter_private_method__get_audio_mix_rate"></div>

[`int`](class_int.md) **_get_audio_mix_rate** ( ) virtual[^virtual] const[^const]<div id="class_moviewriter_private_method__get_audio_mix_rate"></div>

Called when the audio sample rate used for recording the audio is requested by the engine. The value returned must be specified in Hz. Defaults to 48000 Hz if [`_get_audio_mix_rate`](#class_moviewriter_private_method__get_audio_mix_rate) is not overridden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_moviewriter_private_method__get_audio_speaker_mode"></div>

[SpeakerMode](#enum_audioserver_speakermode) **_get_audio_speaker_mode** ( ) virtual[^virtual] const[^const]<div id="class_moviewriter_private_method__get_audio_speaker_mode"></div>

Called when the audio speaker mode used for recording the audio is requested by the engine. This can affect the number of output channels in the resulting audio file/stream. Defaults to [`AudioServer.SPEAKER_MODE_STEREO`](#class_audioserver_constant_speaker_mode_stereo) if [`_get_audio_speaker_mode`](#class_moviewriter_private_method__get_audio_speaker_mode) is not overridden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_moviewriter_private_method__handles_file"></div>

[`bool`](class_bool.md) **_handles_file** ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_moviewriter_private_method__handles_file"></div>

Called when the engine determines whether this **MovieWriter** is able to handle the file at `path`. Must return `true` if this **MovieWriter** is able to handle the given file path, `false` otherwise. Typically, [`_handles_file`](#class_moviewriter_private_method__handles_file) is overridden as follows to allow the user to record a file at any path with a given file extension:

```

    func _handles_file(path):
        # Allows specifying an output file with a `.mkv` file extension (case-insensitive),
        # either in the Project Settings or with the `--write-movie <path>` command line argument.
        return path.get_extension().to_lower() == "mkv"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_moviewriter_private_method__write_begin"></div>

[Error](#enum_@globalscope_error) **_write_begin** ( movie_size: [`Vector2i`](class_vector2i.md), fps: [`int`](class_int.md), base_path: [`String`](class_string.md) ) virtual[^virtual]<div id="class_moviewriter_private_method__write_begin"></div>

Called once before the engine starts writing video and audio data. `movie_size` is the width and height of the video to save. `fps` is the number of frames per second specified in the project settings or using the `--fixed-fps <fps>` [*command line argument*](../tutorials/editor/command_line_tutorial).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_moviewriter_private_method__write_end"></div>

`void` **_write_end** ( ) virtual[^virtual]<div id="class_moviewriter_private_method__write_end"></div>

Called when the engine finishes writing. This occurs when the engine quits by pressing the window manager's close button, or when [`SceneTree.quit`](#class_scenetree_method_quit) is called.

 **Note:** Pressing <i class="fa fa-gamepad"></i>`Ctrl + C` on the terminal running the editor/project does *not* result in [`_write_end`](#class_moviewriter_private_method__write_end) being called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_moviewriter_private_method__write_frame"></div>

[Error](#enum_@globalscope_error) **_write_frame** ( frame_image: [`Image`](class_image.md), audio_frame_block: `const void*` ) virtual[^virtual]<div id="class_moviewriter_private_method__write_frame"></div>

Called at the end of every rendered frame. The `frame_image` and `audio_frame_block` function arguments should be written to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_moviewriter_method_add_writer"></div>

`void` **add_writer** ( writer: [`MovieWriter`](class_moviewriter.md) ) static[^static]<div id="class_moviewriter_method_add_writer"></div>

Adds a writer to be usable by the engine. The supported file extensions can be set by overriding [`_handles_file`](#class_moviewriter_private_method__handles_file).

 **Note:** [`add_writer`](#class_moviewriter_method_add_writer) must be called early enough in the engine initialization to work, as movie writing is designed to start at the same time as the rest of the engine.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
