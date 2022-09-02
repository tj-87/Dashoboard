import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";

interface NavlinkProps extends  ChakraLinkProps {
    icon: ElementType;
    children: string; 
}

export function NavLink({ icon, children }: NavlinkProps) {
    return(
        <Link display="flex" alignItems="center">
        <Icon as={RiDashboardLine} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </Link>
    );
}