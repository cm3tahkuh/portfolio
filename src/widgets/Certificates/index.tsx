import { Container, DecryptedText, TypographyH2 } from "@/shared/ui";

import { motion } from "motion/react";
import type { Certificate } from "@/entities/certificate/model/certificate";
import { useEffect, useState } from "react";
import { loadMdEntries } from "@/shared/lib/dataLoader";
import { CertificateCard } from "@/entities/certificate/ui";

export const Certificates: React.FC = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    loadMdEntries("https://raw.githubusercontent.com/cm3tahkuh/portfolio/refs/heads/gh-pages/data/certificates.md").then(setCertificates);
  }, []);

  return (
    <Container id="certificates" className="scroll-mt-[100px]">
      <DecryptedText
        text={<TypographyH2>Сертификаты</TypographyH2>}
        animateOn="view"
        revealDirection="start"
        speed={100}
        maxIterations={1}
        sequential={true}
      />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {certificates.map((c) => (
            <CertificateCard key={c.name} {...c} />
          ))}
        </motion.div>
      </section>
    </Container>
  );
};
