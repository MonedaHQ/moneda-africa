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
    imageData: {
      src: 'https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/0-900.jpg',
    },
    title: '',
    heading: 'Financing Africa’s Growth Through Focused Capital',
    paragraph:
      'We support the enterprises and sectors driving Africa’s next chapter of growth. <br/><br/>Moneda’s capital management vertical channels institutional and private credit in Africa into high-impact sectors: agriculture, energy, mining, and infrastructure. Fund-management activities are conducted through Moneda Capital Management Limited (MCML), our Mauritian entity licensed by the Financial Services Commission (FSC) of the Republic of Mauritius. <br/><br/>With operational presence in South Africa and a digital capital access platform—Musa—we bridge frontier opportunity with global investment discipline, advancing African credit and reinforcing local content in Africa. <br/><br/><strong>What We Do:</strong><ul><li>Growth capital support for high-impact sectors</li><li>Structuring and fund-management expertise through MCML</li><li>Rigorous due diligence and ethical standards</li><li>Digital capital access via Musa</li></ul><p><em>This information is not a public offer, solicitation, or invitation to invest.</em></p>',
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
