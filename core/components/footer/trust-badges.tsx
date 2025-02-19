import { Link } from '~/components/link';
import Image from 'next/image';
import Script from 'next/script';


export const TrustBadges = () => {
    return (
        <div className='bg-gray-100 py-10'>
            <div className='container mx-auto flex items-center gap-4'>
                <div>
                    <div id="DigiCertClickID_qZP5SmMa"></div>
                    <Script>
                        {` var __dcid = __dcid || [];
                            __dcid.push({"cid":"DigiCertClickID_qZP5SmMa","tag":"qZP5SmMa"});
                            (function(){var cid=document.createElement("script");cid.async=true;cid.src="//seal.digicert.com/seals/cascade/seal.min.js";var s = document.getElementsByTagName("script");var ls = s[(s.length - 1)];ls.parentNode.insertBefore(cid, ls.nextSibling);}());
                    `}
                    </Script>
                </div>
                <div>
                    <Link href={"https://www.bbb.org/us/nj/west-berlin/profile/toner-cartridges/toner-buzz-0221-90215668/#sealclick" }target={"_blank"} rel={"nofollow"}>
                        <Image src={"https://seal-newjersey.bbb.org/seals/blue-seal-293-61-bbb-90215668.png"} alt="Toner Buzz BBB Business Review" width={250} height={50}/>
                    </Link>
                    <Script src={"https://cdn-widgetsrepository.yotpo.com/v1/loader/Sqg72uXTQdwAKmnJav4IyqD2noWPVgE9X2KDwsHi" } />
                </div>
                <div>
                <Link href={"https://www.tonerbuzz.com/reviews/"} ><div id="y-badges" className="yotpo yotpo-badge badge-init">Yotpo Reviews</div></Link>
            </div>
            </div>
        </div>
    );
}