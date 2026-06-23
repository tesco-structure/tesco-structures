import './WhyChooseUs.css';
import { 
  CheckCircle, 
  Handshake, 
  Waves, 
  Ruler, 
  Zap, 
  MonitorPlay, 
  Layers, 
  Calculator, 
  Headset, 
  Leaf,
  ArrowUpRight
} from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <div className="container">
        <h2 className="why-title">
          WHY CLIENTS STAY WITH US<br/>
          <span className="highlight-green">Why Industries Across South India Choose Tesco</span>
        </h2>

        <div className="features-grid-bento">
          
          {/* Card 01 - Large */}
          <div className="bento-card bento-large card-01">
            <div className="card-top-row">
              <div className="icon-wrapper green-bg">
                <CheckCircle size={20} color="#000" />
              </div>
              <span className="card-number">01</span>
            </div>
            <h3 className="card-title-main">15 Years of PEB & Tensile Work</h3>
            <p className="card-desc-main">
              We've been steady PEB contractors in Chennai for 15 years, putting up everything from wide-span warehouses to tensile structures right across South India. That's a lot of jobs, and a lot of lessons we don't have to learn on yours.
            </p>
            <div className="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" alt="Steel Structure" />
              <div className="card-arrow-bottom">
                <ArrowUpRight size={24} color="var(--primary-green)" />
              </div>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bento-card card-02">
            <div className="card-top-row">
              <div className="icon-wrapper dark-bg">
                <Handshake size={20} color="var(--primary-green)" />
              </div>
              <span className="card-number">02</span>
            </div>
            <h4 className="card-title">Steel Fabricated In-House</h4>
            <p className="card-desc">We cut and weld our own steel. Quality and timelines stay with us, not a subcontractor we can't chase.</p>
            <div className="card-arrow">
              <ArrowUpRight size={20} color="var(--primary-green)" />
            </div>
          </div>

          {/* Card 03 */}
          <div className="bento-card card-03">
            <div className="card-top-row">
              <div className="icon-wrapper dark-bg">
                <Waves size={20} color="var(--primary-green)" />
              </div>
              <span className="card-number">03</span>
            </div>
            <h4 className="card-title">30-40% Faster Than RCC</h4>
            <p className="card-desc">Pre-engineered steel goes up far quicker than concrete, so you start using the space months sooner.</p>
            <div className="card-arrow">
              <ArrowUpRight size={20} color="var(--primary-green)" />
            </div>
          </div>

          {/* Card 04 */}
          <div className="bento-card card-04">
            <div className="card-top-row">
              <div className="icon-wrapper dark-bg">
                <Ruler size={20} color="var(--primary-green)" />
              </div>
              <span className="card-number">04</span>
            </div>
            <h4 className="card-title">ISO-Certified Quality</h4>
            <p className="card-desc">An ISO-certified process means our standards are written down and followed - not just promised on a sales call.</p>
            <div className="card-arrow">
              <ArrowUpRight size={20} color="var(--primary-green)" />
            </div>
          </div>

          {/* Card 05 */}
          <div className="bento-card card-05">
            <div className="card-top-row">
              <div className="icon-wrapper dark-bg">
                <Zap size={20} color="var(--primary-green)" />
              </div>
              <span className="card-number">05</span>
            </div>
            <h4 className="card-title">PEB & Tensile, One Team</h4>
            <p className="card-desc">Need a shed and a tensile structure over the entrance? We build both, so you're not juggling two contractors.</p>
            <div className="card-arrow">
              <ArrowUpRight size={20} color="var(--primary-green)" />
            </div>
          </div>

          {/* Card 06 */}
          <div className="bento-card card-06">
            <div className="card-top-row">
              <div className="icon-wrapper dark-bg">
                <MonitorPlay size={20} color="var(--primary-green)" />
              </div>
              <span className="card-number">06</span>
            </div>
            <h4 className="card-title">Engineering That Holds</h4>
            <p className="card-desc">Every structure is designed for local wind and load conditions, so it stands up to what the weather actually throws at it.</p>
            <div className="card-arrow">
              <ArrowUpRight size={20} color="var(--primary-green)" />
            </div>
          </div>

          {/* Card 07 */}
          <div className="bento-card card-07">
            <div className="card-top-row">
              <div className="icon-wrapper dark-bg">
                <Layers size={20} color="var(--primary-green)" />
              </div>
              <span className="card-number">07</span>
            </div>
            <h4 className="card-title">One Point of Contact</h4>
            <p className="card-desc">From the first drawing to handover, you deal with one person here - no being passed between five departments.</p>
            <div className="card-arrow">
              <ArrowUpRight size={20} color="var(--primary-green)" />
            </div>
          </div>

          {/* Card 08 */}
          <div className="bento-card card-08">
            <div className="card-top-row">
              <div className="icon-wrapper dark-bg">
                <Calculator size={20} color="var(--primary-green)" />
              </div>
              <span className="card-number">08</span>
            </div>
            <h4 className="card-title">Straight, Fair Pricing</h4>
            <p className="card-desc">Smart design trims steel waste, and you get a clear quote up front. No padded brochure numbers.</p>
            <div className="card-arrow">
              <ArrowUpRight size={20} color="var(--primary-green)" />
            </div>
          </div>

          {/* Card 09 */}
          <div className="bento-card card-09">
            <div className="card-top-row">
              <div className="icon-wrapper dark-bg">
                <Headset size={20} color="var(--primary-green)" />
              </div>
              <span className="card-number">09</span>
            </div>
            <h4 className="card-title">Start-to-Finish Delivery</h4>
            <p className="card-desc">Design, fabrication and erection all come from us, so nothing slips through the gap between vendors.</p>
            <div className="card-arrow">
              <ArrowUpRight size={20} color="var(--primary-green)" />
            </div>
          </div>

          {/* Card 10 - Wide */}
          <div className="bento-card bento-wide card-10">
            <div className="card-top-row">
              <div className="icon-wrapper dark-bg">
                <Leaf size={20} color="var(--primary-green)" />
              </div>
              <span className="card-number">10</span>
            </div>
            <h4 className="card-title">Built to Last, Built Responsibly</h4>
            <p className="card-desc">
              Steel is recyclable and our builds are made to keep working for decades with very little upkeep - a structure you put up once and stop worrying about.
            </p>
            <div className="card-arrow-bottom-left">
              <ArrowUpRight size={28} color="var(--primary-green)" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
