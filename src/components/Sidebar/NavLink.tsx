import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";
import Link from 'next/link';

interface NavlinkProps extends  ChakraLinkProps {
    icon: ElementType;
    children: string;
    href: string; 
}

export function NavLink({ icon, children, href, ...rest }: NavlinkProps) {
    return(
      <Link href={href} passHref >
        <ChakraLink display="flex" alignItems="center">
        <Icon as={RiDashboardLine} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
      </Link>
    );
}