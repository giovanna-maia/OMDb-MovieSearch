import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React, { ChangeEvent } from "react";
import { Input, SearchIconStyle, SearchInputWrapper } from './styles';

interface Props {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

const SearchInput = (props: Props) => {
    return (
        <SearchInputWrapper>
            <SearchIconStyle>
                <MagnifyingGlassIcon />
            </SearchIconStyle>
            
            <Input
                className="input"
                value={props.searchValue}
                onChange={(event: ChangeEvent<HTMLInputElement>) => props.setSearchValue(event.target.value)}
                placeholder="Type to search your movie"
            >
            </Input>
        </SearchInputWrapper>
    )
}

export default SearchInput;