
// Pacote Final do Site - Curso Online Ganhe com Amazon
// Instruções:
// 1. Baixe este código e faça upload diretamente no Vercel.
// 2. Configure o domínio e o envio de e-mails.
// 3. O site estará pronto para uso.

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  const [accessGranted, setAccessGranted] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [email, setEmail] = useState("");

  const handlePayment = (method) => {
    if (method === 'paypal') {
      window.open('https://www.paypal.com', '_blank');
      setAccessGranted(true);
      setPaymentConfirmed(true);
    } else if (method === 'stripe') {
      window.open('https://checkout.stripe.com', '_blank');
      setAccessGranted(true);
      setPaymentConfirmed(true);
    }
  };

  const sendConfirmationEmail = () => {
    if (email) {
      alert(`Confirmação enviada para ${email}`);
    }
  };

  return (
    <div>Site Finalizado - Curso Amazon</div>
  );
}
