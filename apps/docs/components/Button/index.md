<!--
 * @Author: 姚成成
 * @Date: 2025-08-11 16:19:44
 * @FilePath: /wx-ui/apps/docs/components/Button/index.md
 * @LastEditTime: 2025-08-24 14:46:05
 * 
 * Copyright (c) 2025 by 用户/公司名, All Rights Reserved. 
 * @Description: 
 * @LastEditors: 姚成成
-->
# Button 按钮

## 介绍

基于 Element Plus 的 `el-button` 封装的通用按钮组件，支持尺寸继承和自定义插槽。

## 基本用法

<demo vue="./demo/basic.vue" />

## 尺寸大小

<demo vue="./demo/size.vue" />

## Props 属性

| 参数     | 类型    | 说明     | 可选值                                 | 默认值  |
| -------- | ------- | -------- | -------------------------------------- | ------- |
| type     | string  | 按钮类型 | default/primary/success/warning/danger | default |
| size     | string  | 按钮尺寸 | small/medium/large                     | medium  |
| disabled | boolean | 是否禁用 | -                                      | false   |

## 插槽

| 名称    | 说明               |
| ------- | ------------------ |
| default | 按钮文本内容       |
| loading | 自定义加载状态图标 |
| icon    | 自定义前置图标     |
