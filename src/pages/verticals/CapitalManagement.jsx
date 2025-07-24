import Section from '@/components/Section';
import styles from './styles/capitalmanagement.module.css';
import TextAndImageSection from '@/components/TextAndImageSection';
import GetInTouch from '@/components/GetInTouch';
import Quote from '@/components/Quote';

function CapitalManagement() {
  const quote = {
    quote:
      '“African finance should serve as a bridge between our natural resources and economic development, creating sustainable wealth and uplifting our communities.”',
    caption: 'Benedict Oramah - President, African Export-Import Bank',
  };
  const imageAndTextContent = {
    imageData: { src: '/assets/capital-mamagment-image.jpg' },
    title: '',
    heading: 'Financing Africa’s Growth Through Focused Capital',
    paragraph:
      'We deploy capital with purpose—backing the enterprises and sectors driving Africa’s next chapter of growth.<br/><br/>Moneda’s capital management vertical channels institutional investment into high-impact sectors: agriculture, energy, mining, and infrastructure. Through Moneda Capital, our Mauritian licensed fund/asset management arm, we finance critical small and medium enterprises (CSMEs) in Africa with a focus on sustainable returns and transformative outcomes.<br/><br/> With its operational presence in South Africa, and a digital capital access platform—Musa—we bridge frontier opportunity with global investment discipline.<br/><br/><strong>What We Offer:</strong><ul><li>Growth capital for high-impact sectors</li><li>Structuring and fund management expertise</li><li>Ethical investing with rigorous due diligence</li><li>Digital capital access via Musa</li></ul>',
    contentFirst: true,
  };
  return (
    <>
      <Section>
        <TextAndImageSection
          imageData={imageAndTextContent.imageData}
          heading={imageAndTextContent.heading}
          paragraph={imageAndTextContent.paragraph}
          contentFirst={imageAndTextContent.contentFirst}
          title={imageAndTextContent.title}
        />
      </Section>
      <Quote quote={quote.quote} caption={quote.caption} />
      <GetInTouch venture="capital Management" />
    </>
  );
}

export default CapitalManagement;
