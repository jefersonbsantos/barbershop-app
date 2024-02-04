import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return (
        <header>
            <Card>
                <CardContent className="px-5 py-8 justify-between items-center flex">
                    <Image
                        src="/logo.png"
                        alt="Logo Barber"
                        height={22}
                        width={120}
                    />
                    <Button variant="outline" size="icon">
                        <MenuIcon size={18} />
                    </Button>
                </CardContent>
            </Card>
        </header>
    );
};

export default Header;
