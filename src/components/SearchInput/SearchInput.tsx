import * as React from "react"
import type { PageProps } from "gatsby"

import {Label, Input} from "./styles"

const SearchInput: React.FC<PageProps> = () => {
  return (
    <div role="search" aria-label="Search">
        <Label>
            <Input placeholder="Product SKU, Name…" type="search" name="search" spellcheck="false"/>
        </Label>
    </div>
  )
}

export default SearchInput;