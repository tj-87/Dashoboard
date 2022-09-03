import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    return (
        <Stack spacing="12" align="fle">
        <NavSection title="GERAL">
            <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
            <NavLink icon={RiContactsLine} href="/users" >Usuários</NavLink>
        </NavSection>

        <NavSection title="AUTOMAÇÂO">
            <NavLink icon={RiInputMethodLine} href="/forms">Formulário</NavLink>
            <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
        </NavSection>
      </Stack>

    );
}