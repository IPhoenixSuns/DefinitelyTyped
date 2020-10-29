import * as React from "react";
import { ReactLIAttr } from "../../../typings/shared";

type ExcludedAttributes = "aria-controls" | "aria-selected" | "aria-disabled" | "role" | "tabIndex";

export interface TabCustomAnchorProvidedProps {
    className: string,
    href: string | undefined,
    id: string | undefined
    ref(element: any): void;
    tabIndex: number,
}

export interface TabStandaloneProps extends Omit<ReactLIAttr, ExcludedAttributes> {
    disabled?: boolean;
    handleTabClick(index: TabStandaloneProps["index"], event: React.MouseEvent<HTMLLIElement>): void,
    handleTabKeyDown(index: TabStandaloneProps["index"], event: React.KeyboardEvent<HTMLLIElement>): void,
    href?: string,
    index?: number,
    label?: React.ReactNode,
    renderAnchor?: React.FC<TabCustomAnchorProvidedProps>,
    role?: string, // marked as required, but render code overwrites it currently, also has default
    selected: boolean,
}

export interface TabCustomContentProvidedProps {
    "aria-hidden": boolean;
    "aria-labelledby": string | undefined;
    className: string;
    hidden: boolean;
    id: string | undefined;
    selected: boolean;
}

// see Tabs.js
type TabsProvidedPropKeys = "index" | "handleTabClick" | "handleTabKeyDown" | "ref" | "selected" | "tabIndex";
export interface TabProps extends Omit<TabStandaloneProps, TabsProvidedPropKeys> {
    // only props that are used only by the parent "Tabs" component should go here
    // otherwise they should go in TabStandaloneProps interface
    renderContent?: React.ComponentType<TabCustomContentProvidedProps>;
}

declare class Tab extends React.Component<TabProps> { }

export default Tab;
