<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Attribute\Route;

class FormulaireController extends AbstractController
{
    private $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }


    #[Route('/formulaire', name: 'app_formulaire', methods: ['POST', 'GET'])]
    public function index(Request $request): Response
    {
        $message = '';
        if ($request->isMethod('POST')) {
            $email = $request->request->get('email');
            $messageContent = $request->request->get('message');

            $emailMessage = (new Email())
                ->from($email)
                ->to("hayaouate@gmail.com")
                ->subject("Portfolio Contact QQ T'a Envoyé Un Message")
                ->text($messageContent);

            try {
                $this->mailer->send($emailMessage);
                $message = "message envoyé";
                $alert = "success";

            } catch (\Exception $e) {
                $message = "message non envoyé";
                $alert = "danger";
            }

        }

        return $this->render('formulaire/index.html.twig', [
            'controller_name' => 'FormulaireController',
            'message' => $message,
            'alert'=>$alert
        ]);
    }
}
