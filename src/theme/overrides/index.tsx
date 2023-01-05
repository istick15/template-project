import { Theme } from "@mui/material";
import AppBar from "./AppBar";
import Tooltip from "./Tooltip";
import Card from "./Card";
import Paper from "./Paper";
import Menu from "./Menu";
import Button from "./Button";
import TextField from "./TextField";
import ToggleButton from "./ToggleButton";
import Autocomplete from "./AutoComplete";
import List from "./List";
import Chip from "./Chip";
import Select from "./Select";

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    AppBar(theme),
    Tooltip(theme),
    Card(theme),
    Paper(theme),
    Menu(theme),
    Button(theme),
    Select(theme),
    TextField(theme),
    ToggleButton(theme),
    Autocomplete(theme),
    List(theme),
    Chip(theme)
  );
}
