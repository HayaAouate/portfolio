<?php

namespace App\tools;

use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class SendMessage
{
    private $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }
    public function sendMail(string $to, string $subject, string $messageContent, string $from)
    {
        $email= (new Email())
            ->from($from)
            ->to($to)
            ->subject($subject)
            ->text($messageContent);
        try {
            $this->mailer->send($email);
            return "message envoyé";

        }catch (\Exception $e) {
            return "message non envoyé" .$e->getMessage();
        }

    }



}