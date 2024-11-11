<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Time.xml。 -->

<div id="_class_time"></div>

# Time

**继承：** [`Object`](class_object.md)

A singleton for working with time data.

## 描述

The Time singleton allows converting time between various formats and also getting time information from the system.

This class conforms with as many of the ISO 8601 standards as possible. All dates follow the Proleptic Gregorian calendar. As such, the day before `1582-10-15` is `1582-10-14`, not `1582-10-04`. The year before 1 AD (aka 1 BC) is number `0`, with the year before that (2 BC) being `-1`, etc.

Conversion methods assume "the same timezone", and do not handle timezone conversions or DST automatically. Leap seconds are also not handled, they must be done manually if desired. Suffixes such as "Z" are not handled, you need to strip them away manually.

When getting time information from the system, the time can either be in the local timezone or UTC depending on the `utc` parameter. However, the [`get_unix_time_from_system`](class_time.md#class_time_method_get_unix_time_from_system) method always uses UTC as it returns the seconds passed since the [*Unix epoch*](https://en.wikipedia.org/wiki/Unix_time).

 **Important:** The `_from_system` methods use the system clock that the user can manually set. **Never use** this method for precise time calculation since its results are subject to automatic adjustments by the user or the operating system. **Always use** [`get_ticks_usec`](class_time.md#class_time_method_get_ticks_usec) or [`get_ticks_msec`](class_time.md#class_time_method_get_ticks_msec) for precise time calculation instead, since they are guaranteed to be monotonic (i.e. never decrease).

## 方法

|||
|:-:|:--|
| [`Dictionary`](class_dictionary.md) | [`get_date_dict_from_system`](class_time.md#class_time_method_get_date_dict_from_system) ( utc: [`bool`](class_bool.md) = false ) const[^const]                                                                        |
| [`Dictionary`](class_dictionary.md) | [`get_date_dict_from_unix_time`](class_time.md#class_time_method_get_date_dict_from_unix_time) ( unix_time_val: [`int`](class_int.md) ) const[^const]                                                                  |
| [`String`](class_string.md)         | [`get_date_string_from_system`](class_time.md#class_time_method_get_date_string_from_system) ( utc: [`bool`](class_bool.md) = false ) const[^const]                                                                    |
| [`String`](class_string.md)         | [`get_date_string_from_unix_time`](class_time.md#class_time_method_get_date_string_from_unix_time) ( unix_time_val: [`int`](class_int.md) ) const[^const]                                                              |
| [`Dictionary`](class_dictionary.md) | [`get_datetime_dict_from_datetime_string`](class_time.md#class_time_method_get_datetime_dict_from_datetime_string) ( datetime: [`String`](class_string.md), weekday: [`bool`](class_bool.md) ) const[^const]           |
| [`Dictionary`](class_dictionary.md) | [`get_datetime_dict_from_system`](class_time.md#class_time_method_get_datetime_dict_from_system) ( utc: [`bool`](class_bool.md) = false ) const[^const]                                                                |
| [`Dictionary`](class_dictionary.md) | [`get_datetime_dict_from_unix_time`](class_time.md#class_time_method_get_datetime_dict_from_unix_time) ( unix_time_val: [`int`](class_int.md) ) const[^const]                                                          |
| [`String`](class_string.md)         | [`get_datetime_string_from_datetime_dict`](class_time.md#class_time_method_get_datetime_string_from_datetime_dict) ( datetime: [`Dictionary`](class_dictionary.md), use_space: [`bool`](class_bool.md) ) const[^const] |
| [`String`](class_string.md)         | [`get_datetime_string_from_system`](class_time.md#class_time_method_get_datetime_string_from_system) ( utc: [`bool`](class_bool.md) = false, use_space: [`bool`](class_bool.md) = false ) const[^const]                |
| [`String`](class_string.md)         | [`get_datetime_string_from_unix_time`](class_time.md#class_time_method_get_datetime_string_from_unix_time) ( unix_time_val: [`int`](class_int.md), use_space: [`bool`](class_bool.md) = false ) const[^const]          |
| [`String`](class_string.md)         | [`get_offset_string_from_offset_minutes`](class_time.md#class_time_method_get_offset_string_from_offset_minutes) ( offset_minutes: [`int`](class_int.md) ) const[^const]                                               |
| [`int`](class_int.md)               | [`get_ticks_msec`](class_time.md#class_time_method_get_ticks_msec) ( ) const[^const]                                                                                                                                   |
| [`int`](class_int.md)               | [`get_ticks_usec`](class_time.md#class_time_method_get_ticks_usec) ( ) const[^const]                                                                                                                                   |
| [`Dictionary`](class_dictionary.md) | [`get_time_dict_from_system`](class_time.md#class_time_method_get_time_dict_from_system) ( utc: [`bool`](class_bool.md) = false ) const[^const]                                                                        |
| [`Dictionary`](class_dictionary.md) | [`get_time_dict_from_unix_time`](class_time.md#class_time_method_get_time_dict_from_unix_time) ( unix_time_val: [`int`](class_int.md) ) const[^const]                                                                  |
| [`String`](class_string.md)         | [`get_time_string_from_system`](class_time.md#class_time_method_get_time_string_from_system) ( utc: [`bool`](class_bool.md) = false ) const[^const]                                                                    |
| [`String`](class_string.md)         | [`get_time_string_from_unix_time`](class_time.md#class_time_method_get_time_string_from_unix_time) ( unix_time_val: [`int`](class_int.md) ) const[^const]                                                              |
| [`Dictionary`](class_dictionary.md) | [`get_time_zone_from_system`](class_time.md#class_time_method_get_time_zone_from_system) ( ) const[^const]                                                                                                             |
| [`int`](class_int.md)               | [`get_unix_time_from_datetime_dict`](class_time.md#class_time_method_get_unix_time_from_datetime_dict) ( datetime: [`Dictionary`](class_dictionary.md) ) const[^const]                                                 |
| [`int`](class_int.md)               | [`get_unix_time_from_datetime_string`](class_time.md#class_time_method_get_unix_time_from_datetime_string) ( datetime: [`String`](class_string.md) ) const[^const]                                                     |
| [`float`](class_float.md)           | [`get_unix_time_from_system`](class_time.md#class_time_method_get_unix_time_from_system) ( ) const[^const]                                                                                                             |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_time_month"></div>

enum **Month**: <div id="enum_time_month"></div>

<div id="_class_time_constant_month_january"></div>

[Month](#enum_time_month) **MONTH_JANUARY** = ``1``

The month of January, represented numerically as `01`.

<div id="_class_time_constant_month_february"></div>

[Month](#enum_time_month) **MONTH_FEBRUARY** = ``2``

The month of February, represented numerically as `02`.

<div id="_class_time_constant_month_march"></div>

[Month](#enum_time_month) **MONTH_MARCH** = ``3``

The month of March, represented numerically as `03`.

<div id="_class_time_constant_month_april"></div>

[Month](#enum_time_month) **MONTH_APRIL** = ``4``

The month of April, represented numerically as `04`.

<div id="_class_time_constant_month_may"></div>

[Month](#enum_time_month) **MONTH_MAY** = ``5``

The month of May, represented numerically as `05`.

<div id="_class_time_constant_month_june"></div>

[Month](#enum_time_month) **MONTH_JUNE** = ``6``

The month of June, represented numerically as `06`.

<div id="_class_time_constant_month_july"></div>

[Month](#enum_time_month) **MONTH_JULY** = ``7``

The month of July, represented numerically as `07`.

<div id="_class_time_constant_month_august"></div>

[Month](#enum_time_month) **MONTH_AUGUST** = ``8``

The month of August, represented numerically as `08`.

<div id="_class_time_constant_month_september"></div>

[Month](#enum_time_month) **MONTH_SEPTEMBER** = ``9``

The month of September, represented numerically as `09`.

<div id="_class_time_constant_month_october"></div>

[Month](#enum_time_month) **MONTH_OCTOBER** = ``10``

The month of October, represented numerically as `10`.

<div id="_class_time_constant_month_november"></div>

[Month](#enum_time_month) **MONTH_NOVEMBER** = ``11``

The month of November, represented numerically as `11`.

<div id="_class_time_constant_month_december"></div>

[Month](#enum_time_month) **MONTH_DECEMBER** = ``12``

The month of December, represented numerically as `12`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_time_weekday"></div>

enum **Weekday**: <div id="enum_time_weekday"></div>

<div id="_class_time_constant_weekday_sunday"></div>

[Weekday](#enum_time_weekday) **WEEKDAY_SUNDAY** = ``0``

The day of the week Sunday, represented numerically as `0`.

<div id="_class_time_constant_weekday_monday"></div>

[Weekday](#enum_time_weekday) **WEEKDAY_MONDAY** = ``1``

The day of the week Monday, represented numerically as `1`.

<div id="_class_time_constant_weekday_tuesday"></div>

[Weekday](#enum_time_weekday) **WEEKDAY_TUESDAY** = ``2``

The day of the week Tuesday, represented numerically as `2`.

<div id="_class_time_constant_weekday_wednesday"></div>

[Weekday](#enum_time_weekday) **WEEKDAY_WEDNESDAY** = ``3``

The day of the week Wednesday, represented numerically as `3`.

<div id="_class_time_constant_weekday_thursday"></div>

[Weekday](#enum_time_weekday) **WEEKDAY_THURSDAY** = ``4``

The day of the week Thursday, represented numerically as `4`.

<div id="_class_time_constant_weekday_friday"></div>

[Weekday](#enum_time_weekday) **WEEKDAY_FRIDAY** = ``5``

The day of the week Friday, represented numerically as `5`.

<div id="_class_time_constant_weekday_saturday"></div>

[Weekday](#enum_time_weekday) **WEEKDAY_SATURDAY** = ``6``

The day of the week Saturday, represented numerically as `6`.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_time_method_get_date_dict_from_system"></div>

[`Dictionary`](class_dictionary.md) **get_date_dict_from_system** ( utc: [`bool`](class_bool.md) = false ) const[^const]<div id="class_time_method_get_date_dict_from_system"></div>

Returns the current date as a dictionary of keys: `year`, `month`, `day`, and `weekday`.

The returned values are in the system's local time when `utc` is `false`, otherwise they are in UTC.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_date_dict_from_unix_time"></div>

[`Dictionary`](class_dictionary.md) **get_date_dict_from_unix_time** ( unix_time_val: [`int`](class_int.md) ) const[^const]<div id="class_time_method_get_date_dict_from_unix_time"></div>

Converts the given Unix timestamp to a dictionary of keys: `year`, `month`, `day`, and `weekday`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_date_string_from_system"></div>

[`String`](class_string.md) **get_date_string_from_system** ( utc: [`bool`](class_bool.md) = false ) const[^const]<div id="class_time_method_get_date_string_from_system"></div>

Returns the current date as an ISO 8601 date string (YYYY-MM-DD).

The returned values are in the system's local time when `utc` is `false`, otherwise they are in UTC.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_date_string_from_unix_time"></div>

[`String`](class_string.md) **get_date_string_from_unix_time** ( unix_time_val: [`int`](class_int.md) ) const[^const]<div id="class_time_method_get_date_string_from_unix_time"></div>

Converts the given Unix timestamp to an ISO 8601 date string (YYYY-MM-DD).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_datetime_dict_from_datetime_string"></div>

[`Dictionary`](class_dictionary.md) **get_datetime_dict_from_datetime_string** ( datetime: [`String`](class_string.md), weekday: [`bool`](class_bool.md) ) const[^const]<div id="class_time_method_get_datetime_dict_from_datetime_string"></div>

Converts the given ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS) to a dictionary of keys: `year`, `month`, `day`, `weekday`, `hour`, `minute`, and `second`.

If `weekday` is `false`, then the `weekday` entry is excluded (the calculation is relatively expensive).

 **Note:** Any decimal fraction in the time string will be ignored silently.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_datetime_dict_from_system"></div>

[`Dictionary`](class_dictionary.md) **get_datetime_dict_from_system** ( utc: [`bool`](class_bool.md) = false ) const[^const]<div id="class_time_method_get_datetime_dict_from_system"></div>

Returns the current date as a dictionary of keys: `year`, `month`, `day`, `weekday`, `hour`, `minute`, `second`, and `dst` (Daylight Savings Time).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_datetime_dict_from_unix_time"></div>

[`Dictionary`](class_dictionary.md) **get_datetime_dict_from_unix_time** ( unix_time_val: [`int`](class_int.md) ) const[^const]<div id="class_time_method_get_datetime_dict_from_unix_time"></div>

Converts the given Unix timestamp to a dictionary of keys: `year`, `month`, `day`, `weekday`, `hour`, `minute`, and `second`.

The returned Dictionary's values will be the same as the [`get_datetime_dict_from_system`](class_time.md#class_time_method_get_datetime_dict_from_system) if the Unix timestamp is the current time, with the exception of Daylight Savings Time as it cannot be determined from the epoch.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_datetime_string_from_datetime_dict"></div>

[`String`](class_string.md) **get_datetime_string_from_datetime_dict** ( datetime: [`Dictionary`](class_dictionary.md), use_space: [`bool`](class_bool.md) ) const[^const]<div id="class_time_method_get_datetime_string_from_datetime_dict"></div>

Converts the given dictionary of keys to an ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS).

The given dictionary can be populated with the following keys: `year`, `month`, `day`, `hour`, `minute`, and `second`. Any other entries (including `dst`) are ignored.

If the dictionary is empty, `0` is returned. If some keys are omitted, they default to the equivalent values for the Unix epoch timestamp 0 (1970-01-01 at 00:00:00).

If `use_space` is `true`, the date and time bits are separated by an empty space character instead of the letter T.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_datetime_string_from_system"></div>

[`String`](class_string.md) **get_datetime_string_from_system** ( utc: [`bool`](class_bool.md) = false, use_space: [`bool`](class_bool.md) = false ) const[^const]<div id="class_time_method_get_datetime_string_from_system"></div>

Returns the current date and time as an ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS).

The returned values are in the system's local time when `utc` is `false`, otherwise they are in UTC.

If `use_space` is `true`, the date and time bits are separated by an empty space character instead of the letter T.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_datetime_string_from_unix_time"></div>

[`String`](class_string.md) **get_datetime_string_from_unix_time** ( unix_time_val: [`int`](class_int.md), use_space: [`bool`](class_bool.md) = false ) const[^const]<div id="class_time_method_get_datetime_string_from_unix_time"></div>

Converts the given Unix timestamp to an ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS).

If `use_space` is `true`, the date and time bits are separated by an empty space character instead of the letter T.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_offset_string_from_offset_minutes"></div>

[`String`](class_string.md) **get_offset_string_from_offset_minutes** ( offset_minutes: [`int`](class_int.md) ) const[^const]<div id="class_time_method_get_offset_string_from_offset_minutes"></div>

Converts the given timezone offset in minutes to a timezone offset string. For example, -480 returns "-08:00", 345 returns "+05:45", and 0 returns "+00:00".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_ticks_msec"></div>

[`int`](class_int.md) **get_ticks_msec** ( ) const[^const]<div id="class_time_method_get_ticks_msec"></div>

Returns the amount of time passed in milliseconds since the engine started.

Will always be positive or 0 and uses a 64-bit value (it will wrap after roughly 500 million years).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_ticks_usec"></div>

[`int`](class_int.md) **get_ticks_usec** ( ) const[^const]<div id="class_time_method_get_ticks_usec"></div>

Returns the amount of time passed in microseconds since the engine started.

Will always be positive or 0 and uses a 64-bit value (it will wrap after roughly half a million years).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_time_dict_from_system"></div>

[`Dictionary`](class_dictionary.md) **get_time_dict_from_system** ( utc: [`bool`](class_bool.md) = false ) const[^const]<div id="class_time_method_get_time_dict_from_system"></div>

Returns the current time as a dictionary of keys: `hour`, `minute`, and `second`.

The returned values are in the system's local time when `utc` is `false`, otherwise they are in UTC.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_time_dict_from_unix_time"></div>

[`Dictionary`](class_dictionary.md) **get_time_dict_from_unix_time** ( unix_time_val: [`int`](class_int.md) ) const[^const]<div id="class_time_method_get_time_dict_from_unix_time"></div>

Converts the given time to a dictionary of keys: `hour`, `minute`, and `second`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_time_string_from_system"></div>

[`String`](class_string.md) **get_time_string_from_system** ( utc: [`bool`](class_bool.md) = false ) const[^const]<div id="class_time_method_get_time_string_from_system"></div>

Returns the current time as an ISO 8601 time string (HH:MM:SS).

The returned values are in the system's local time when `utc` is `false`, otherwise they are in UTC.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_time_string_from_unix_time"></div>

[`String`](class_string.md) **get_time_string_from_unix_time** ( unix_time_val: [`int`](class_int.md) ) const[^const]<div id="class_time_method_get_time_string_from_unix_time"></div>

Converts the given Unix timestamp to an ISO 8601 time string (HH:MM:SS).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_time_zone_from_system"></div>

[`Dictionary`](class_dictionary.md) **get_time_zone_from_system** ( ) const[^const]<div id="class_time_method_get_time_zone_from_system"></div>

Returns the current time zone as a dictionary of keys: `bias` and `name`.

- `bias` is the offset from UTC in minutes, since not all time zones are multiples of an hour from UTC.

- `name` is the localized name of the time zone, according to the OS locale settings of the current user.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_unix_time_from_datetime_dict"></div>

[`int`](class_int.md) **get_unix_time_from_datetime_dict** ( datetime: [`Dictionary`](class_dictionary.md) ) const[^const]<div id="class_time_method_get_unix_time_from_datetime_dict"></div>

Converts a dictionary of time values to a Unix timestamp.

The given dictionary can be populated with the following keys: `year`, `month`, `day`, `hour`, `minute`, and `second`. Any other entries (including `dst`) are ignored.

If the dictionary is empty, `0` is returned. If some keys are omitted, they default to the equivalent values for the Unix epoch timestamp 0 (1970-01-01 at 00:00:00).

You can pass the output from [`get_datetime_dict_from_unix_time`](class_time.md#class_time_method_get_datetime_dict_from_unix_time) directly into this function and get the same as what was put in.

 **Note:** Unix timestamps are often in UTC. This method does not do any timezone conversion, so the timestamp will be in the same timezone as the given datetime dictionary.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_unix_time_from_datetime_string"></div>

[`int`](class_int.md) **get_unix_time_from_datetime_string** ( datetime: [`String`](class_string.md) ) const[^const]<div id="class_time_method_get_unix_time_from_datetime_string"></div>

Converts the given ISO 8601 date and/or time string to a Unix timestamp. The string can contain a date only, a time only, or both.

 **Note:** Unix timestamps are often in UTC. This method does not do any timezone conversion, so the timestamp will be in the same timezone as the given datetime string.

 **Note:** Any decimal fraction in the time string will be ignored silently.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_time_method_get_unix_time_from_system"></div>

[`float`](class_float.md) **get_unix_time_from_system** ( ) const[^const]<div id="class_time_method_get_unix_time_from_system"></div>

Returns the current Unix timestamp in seconds based on the system time in UTC. This method is implemented by the operating system and always returns the time in UTC. The Unix timestamp is the number of seconds passed since 1970-01-01 at 00:00:00, the [*Unix epoch*](https://en.wikipedia.org/wiki/Unix_time).

 **Note:** Unlike other methods that use integer timestamps, this method returns the timestamp as a [`float`](class_float.md) for sub-second precision.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
