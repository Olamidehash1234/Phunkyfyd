import React from 'react';

const TypographyHero: React.FC = () => {
  const styles = {
    container: {
      width: '100%',
      backgroundColor: 'white',
      padding: '60px 20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '200px'
    } as React.CSSProperties,
    
    content: {
      // maxWidth: '1800px',
      width: '100%',
      textAlign: 'left' as const
    } as React.CSSProperties,
    
    line: {
      display: 'flex',
      alignItems: 'baseline',
      flexWrap: 'wrap' as const,
      gap: '15px 30px',
      marginBottom: '20px'
    } as React.CSSProperties,
    
    mainText: {
      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
      fontWeight: '300',
      letterSpacing: '0.02em',
      margin: '0',
      lineHeight: '1'
    } as React.CSSProperties,
    
    goldText: {
      color: '#D4A853'
    } as React.CSSProperties,
    
    blackText: {
      color: '#2D2D2D'
    } as React.CSSProperties,
    
    smallText: {
      fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
      color: '#666666',
      fontWeight: '300',
      letterSpacing: '0.1em',
      margin: '0 10px',
      lineHeight: '1.2'
    } as React.CSSProperties
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* First Line */}
        <div style={styles.line}>
          <h1 style={{...styles.mainText, ...styles.goldText}}>
            TIMELESS.
          </h1>
          <p style={styles.smallText}>
            A New Contemporary Design
          </p>
          <h2 style={{...styles.mainText, ...styles.blackText}}>
            BEAUTIFUL.
          </h2>
        </div>
        
        {/* Second Line */}
        <div style={styles.line}>
          <h3 style={{...styles.mainText, ...styles.blackText}}>
            FUNCTIONAL.
          </h3>
          <p style={styles.smallText}>
            Create Tomorrow's Classics
          </p>
          <h4 style={{...styles.mainText, ...styles.goldText}}>
            DESIGN.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TypographyHero;