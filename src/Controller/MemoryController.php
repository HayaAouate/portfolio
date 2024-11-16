<?php

namespace App\Controller;

use App\tools\SendMessage;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MemoryController extends AbstractController
{
    private $sendMessage;
    public function __construct(SendMessage $sendMessage)
    {
        $this->sendMessage = $sendMessage;

    }
    public function sendTest():Response
    {
        $result=$this->sendMessage->sendMail(
            "hayaouate@gmail.com",
            "test",
            "test",
            "larrataures@gmail.com"

        );
        return new Response($result);

    }
    #[Route('/memory', name: 'app_memory')]
    public function index(): Response
    {

        return $this->render('memory/index.html.twig', [
            'controller_name' => 'MemoryController',

        ]);
    }

}
