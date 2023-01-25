/*
 * Copyright 2020 The Kubernetes Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react"

import {
  Kui,
  KuiProps,
  ContextWidgets,
  GitHubIcon,
  MadeWithKui,
  MeterWidgets,
  SpaceFiller,
} from "@kui-shell/plugin-client-common"

import { version } from "@kui-shell/client/package.json"
import autoplay from "@kui-shell/client/config.d/autoplay.json"
import { productName } from "@kui-shell/client/config.d/name.json"

import "../web/scss/components/Client/_index.scss"

/**
 * Offline client definition
 */
export default function renderMain(props: KuiProps) {
  return (
    <Kui
      noHelp
      version={version}
      productName={productName}
      lightweightTables
      {...props}
      quietExecCommand={false}
      loading={<div />}
      commandLine={
        props.commandLine || autoplay.length === 0 ? [] : ["commentary", "--simple", "--readonly", "-f", ...autoplay]
      }
    >
      <ContextWidgets>
        {/* widgets you want to appear flush left */}
        <GitHubIcon />
        <MadeWithKui position="top-start" />
      </ContextWidgets>

      <SpaceFiller />

      <MeterWidgets>{/* widgets you want to appear flush right */}</MeterWidgets>
    </Kui>
  )
}
